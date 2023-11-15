import classNames from 'classnames'
import { useMemo } from 'react'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import { useUserClaimablePromotions } from '@hooks/useUserClaimablePromotions'
import { useUserClaimedPromotions } from '@hooks/useUserClaimedPromotions'
import { AccountPromotionsCard } from './AccountPromotionsCard'

interface AccountPromotionsCardsProps {
  address?: Address
  className?: string
}

export const AccountPromotionsCards = (props: AccountPromotionsCardsProps) => {
  const { address, className } = props

  const { address: _userAddress } = useAccount()
  const userAddress = address ?? _userAddress

  const { data: claimed } = useUserClaimedPromotions(userAddress as Address)
  const { data: claimable } = useUserClaimablePromotions(userAddress as Address)

  const promotions = useMemo(() => {
    const uniquePromotions = new Set<string>()

    claimed.forEach((promotion) =>
      uniquePromotions.add(`${promotion.chainId}-${promotion.promotionId}`)
    )
    claimable.forEach((promotion) =>
      uniquePromotions.add(`${promotion.chainId}-${promotion.promotionId}`)
    )

    return [...uniquePromotions]
  }, [claimed, claimable])

  return (
    <div className={classNames('w-full flex flex-col gap-4', className)}>
      {promotions.map((promotion) => {
        const chainId = parseInt(promotion.split('-')[0])
        const promotionId = BigInt(promotion.split('-')[1])

        return (
          <AccountPromotionsCard
            key={promotion}
            chainId={chainId}
            promotionId={promotionId}
            address={userAddress}
          />
        )
      })}
    </div>
  )
}
